import { ref, push, set, get, child, update } from 'firebase/database';
import { database } from '../config/firebase-config';

export class DBServiceApi {
    static async createNewProject(projectData, dispatch) {
        try {
            if (!projectData.title || !projectData.coverImageUrl || !projectData.imageUrls) {
                throw new Error('Missing required project data');
            }
            
            dispatch({ type: 'LOADING' });

            // Create project reference
            const projectsRef = ref(database, 'projects');
            const newProjectRef = push(projectsRef);

            // Prepare project data
            const project = {
                id: newProjectRef.key,
                title: projectData.title,
                imageUrls: projectData.imageUrls || [], 
                coverImageUrl: projectData.coverImageUrl,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            // Save to database
            await set(newProjectRef, project);
            
            // Update image collection
            const allImages = [project.coverImageUrl, ...project.imageUrls];
            await this.updateImageCollection(allImages);

            dispatch({ type: 'PROJECT_CREATED', payload: project });
            return project;
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error.message });
            throw error;
        }
    }

    static async getProjects() {
        try {
            const dbRef = ref(database);
            const snapshot = await get(child(dbRef, 'projects'));

            if (snapshot.exists()) {
                const projects = Object.values(snapshot.val());
                // Sort by createdAt date (newest first)
                return projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            }
            return [];
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error(`Failed to fetch projects: ${error.message}`);
        }
    }

    static async updateProject(projectId, updateData) {
        try {
            if (!projectId) {
                throw new Error('Project ID is required');
            }
            
            const projectRef = ref(database, `projects/${projectId}`);
            
            // Add updatedAt timestamp
            const dataToUpdate = {
                ...updateData,
                updatedAt: new Date().toISOString()
            };
            
            await update(projectRef, dataToUpdate);
            
            // If there are image URLs, update the image collection
            if (updateData.coverImageUrl || updateData.imageUrls) {
                const allImages = [];
                if (updateData.coverImageUrl) allImages.push(updateData.coverImageUrl);
                if (updateData.imageUrls) allImages.push(...updateData.imageUrls);
                
                if (allImages.length > 0) {
                    await this.updateImageCollection(allImages);
                }
            }
            
            // Return the complete updated project
            const snapshot = await get(projectRef);
            return snapshot.val();
        } catch (error) {
            console.error('Error updating project:', error);
            throw new Error(`Failed to update project: ${error.message}`);
        }
    }

    static async deleteProject(projectId) {
        try {
            if (!projectId) {
                throw new Error('Project ID is required');
            }
            
            const projectRef = ref(database, `projects/${projectId}`);
            await set(projectRef, null);
            return true;
        } catch (error) {
            console.error('Error deleting project:', error);
            throw new Error(`Failed to delete project: ${error.message}`);
        }
    }

    static async updateImageCollection(imageUrls) {
        try {
            if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
                return [];
            }
            
            // Get existing images first
            const existingImages = await this.getImageCollection();
            
            // Combine with new images and remove duplicates
            const allImages = [...existingImages, ...imageUrls];
            const uniqueUrls = [...new Set(allImages)].filter(url => url && url.trim() !== '');
            
            const imagesRef = ref(database, 'images');
            await set(imagesRef, uniqueUrls);
            return uniqueUrls;
        } catch (error) {
            console.error('Error updating image collection:', error);
            throw new Error(`Failed to update image collection: ${error.message}`);
        }
    }

    static async getImageCollection() {
        try {
            const imagesRef = ref(database, 'images');
            const snapshot = await get(imagesRef);
            return snapshot.exists() ? snapshot.val() : [];
        } catch (error) {
            console.error('Error fetching image collection:', error);
            throw new Error(`Failed to fetch image collection: ${error.message}`);
        }
    }
}