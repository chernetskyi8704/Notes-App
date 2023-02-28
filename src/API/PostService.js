export default class PostService {
  static async getProjects() {
    const response = await fetch("../src/data/projects.json");
    const data = await response.json();
    const projects = data.map(project => {
      return {
        name: project.name,
        link: project.link,
        image: project.image,
        alt: project.name,
      };
    });
    return projects;
  }
}
