import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace: "projecttime3",
});

export const createCollection = async () => {
  try{
    await db.applySchema(`
      @public
      collection Project {
        id: string;
        contractAddress: string;
        name: string;
        description: string;
        comments: string[];

        constructor (id: string, contractAddress: string, name: string, description: string) {
          this.id = id;
          this.contractAddress = contractAddress;
          this.name = name;
          this.description = description;
          this.comments = [];
        }

        addComment (comment: string) {
          this.comments.push(comment);
        }
      }
    `,
      "projecttime3"
    ); // your-namespace is optional if you have defined a default namespace
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const addProjectToPB = async (id, address, name, description) => {
  try{
    await db.collection("Project").create([id, address, name, description]); 
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getProjectsFromPB = async () => {
  try{
    const data = await db.collection("Project").get();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getProjectFromPB = async (address) => {
  try{
    const data = await db.collection("Project").record(address).get();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const addCommentToPB = async (id, comment) => {
  try{
    const data = await db.collection("Project")
      .record(id)
      .call("addComment", [comment]);
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}