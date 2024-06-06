export default class TechnosService {

  static async getTechnos() {
    try {
      const reponse = await fetch("http://localhost:8080/technos")
      return await reponse.json()
    } catch (e) {
      console.log(e);
    }
  }





}