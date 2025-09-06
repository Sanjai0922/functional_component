import React from 'react';
function Age(props) {
  return <p>Age: {props.age}</p>;
}
export default function age(){
  return<Age age={2} />;
}
