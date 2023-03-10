import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-2DDqmQme6uZMfz64ezdcS3NT",
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: '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'
});
const openai = new OpenAIApi(configuration);

const Answer = () => {
  const [answer,setAnswer] =useState('');
  const [question,setQuestion] = useState('')
  let { id } = useParams();

  const fetchQuestion = async (id) => {
    const docRef = doc(db, "categories", "health", "questions", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setQuestion(docSnap.data().question)
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: docSnap.data().question,
        max_tokens: 100,
        temperature: 0,
      });
      setAnswer(response.data.choices[0].text);
    } else {
      console.log("No such document!");
    }
  }


useEffect(() => {
  fetchQuestion(id)
}, [])
return (
  <div>
  <b>question:</b> {question}
  <br />
  <b>answer:</b> {answer}
  </div>
)
}

export default Answer;