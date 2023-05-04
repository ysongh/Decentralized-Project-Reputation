import React, { useState } from 'react';
import { Container, Heading, Input, Button } from '@chakra-ui/react'
import { Polybase } from "@polybase/client";
import { createCollection } from '../Polybase';

const db = new Polybase({
  defaultNamespace: "projecttime-1",
});

function PolybaseTest() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [comment, setComment] = useState("");

  const createCollectionTest = async () => {
    try{
      await db.applySchema(`
        @public
        collection City {
          id: string;
          name: string;
          comments: string[];
          country?: string;

          constructor (id: string, name: string) {
            this.id = id;
            this.name = name;
            this.comments = [];
          }

          setCountry (country: string) {
            this.country = country;
          }

          addComment (comment: string) {
            this.comments.push(comment);
          }
        }

        @public
        collection Country {
          id: string;
          name: string;

          constructor (id: string, name: string) {
            this.id = id;
            this.name = name;
          }
        }
      `,
        "projecttime-1"
      ); // your-namespace is optional if you have defined a default namespace
    } catch (error) {
      
    }
  }
  
  const addData = async () => {
    try{
      // Based on the collection code above, "new-york" is the `id` of the new record. 
      // The `id` "new-york" must be unique (not already exist in the collection)
      await db.collection("City").create([city.toLocaleLowerCase(), city]); 
      // new-york is the `id`, New York is the `name`
    } catch (error) {
      
    }
  }

  const readData = async () => {
    try{
      const data = await db.collection("City").get();
      console.log(data);
      setCities(data.data);
    } catch (error) {
      
    }
  }

  const updateRecord = async () => {
    // .create(functionName, args) args array is defined by the updateName fn in collection schema
    const recordData = await db.collection("City")
      .record("newyork")
      .call("addComment", [comment]);
  }

  return (
    <Container maxW='1000px'>
      <Heading my='3'>Test</Heading>
      <Button onClick={createCollection}>
        Create Collection
      </Button>
      <br />
      <br />
      <Input placeholder='City' onChange={(e) => setCity(e.target.value)}/>
      <Button onClick={addData}>
        Add
      </Button>
      <Input placeholder='Comment' onChange={(e) => setComment(e.target.value)}/>
      <Button onClick={updateRecord}>
        comment
      </Button>
      <br />
      <br />
      <Button onClick={readData}>
        Read
      </Button>
      {cities.map(c => (
        <div key={c.data.id}>
          <p>{c.data.name}</p>
          {c.data.comments.map(text => (
            <p key={text}>- {text}</p>
          ))}
        </div>
      ))}
    </Container>
  )
}

export default PolybaseTest;