// import React from 'react';

const InitialChats = () => {

  return (
    {
      Hogwarts: {
        name: "Chatroom Hogwarts",
        messages: [{ id: 1, text: "Welcome to Hogwarts Chatroom!", sender: 'Hogwarts' }],
      },
      Harry: {
        name: "Harry Potter",
        messages: [{ id: 1, text: "Hello, i am Harry!", sender: 'Harry' }],
      },
      Hermiona: {
        name: "Hermiona Granger",
        messages: [{ id: 1, text: "Hello, i am Hermiona!", sender: 'Hermiona' }],
      },
      Ron: {
        name: "Ron Wisley",
        messages: [{ id: 1, text: "Hello, i am Ron!", sender: 'Ron' }],
      },
      Voldemort: {
        name: "Lord Voldemort",
        messages: [{ id: 1, text: "Hello, i am a Black Lord!", sender: 'Voldemort' }],
      },
      Belatrix: {
        name: "Belatrix LeStrange",
        messages: [{ id: 1, text: "Hello, i am Belatrix!", sender: 'Belatrix' }],
      },
      Snag: {
        name: "Prof.Severus Snag",
        messages: [{ id: 1, text: "Hello, i am prof.Snag!", sender: 'Snag' }],
      },
    }
  )
}

export default InitialChats;