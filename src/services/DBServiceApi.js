import { getDatabase, ref, push, set, get, child } from 'firebase/database';
import { database } from '../config/firebase-config';

export class DBServiceApi {
    static async createNewProject(projectData, dispatch) {
        try {
            dispatch({ type: 'LOADING' });

            // Create project reference
            const projectsRef = ref(database, 'projects');
            const newProjectRef = push(projectsRef);

            // Prepare project data
            const project = {
                id: newProjectRef.key,
                title: projectData.title,
                description: projectData.description,
                imageUrls: projectData.imageUrls, // Expect URLs directly from your image hosting service
                coverImageUrl: projectData.coverImageUrl, // Expect URL directly from your image hosting service
                createdAt: new Date().toISOString()
            };

            // Save to database
            await set(newProjectRef, project);

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
                return Object.values(snapshot.val());
            }
            return [];
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw new Error('Failed to fetch projects');
        }
    }

    static async updateProject(projectId, updateData) {
        try {
            const projectRef = ref(database, `projects/${projectId}`);
            await set(projectRef, updateData);
            return updateData;
        } catch (error) {
            console.error('Error updating project:', error);
            throw new Error('Failed to update project');
        }
    }

    static async deleteProject(projectId) {
        try {
            const projectRef = ref(database, `projects/${projectId}`);
            await set(projectRef, null);
            return true;
        } catch (error) {
            console.error('Error deleting project:', error);
            throw new Error('Failed to delete project');
        }
    }
}