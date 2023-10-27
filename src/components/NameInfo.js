import { useState } from 'react';

const NameInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const fetchNameInfo = async (name) => {
    try {
      // Call the Agify API
      const agifyResponse = await fetch(`https://api.agify.io?name=${name}`);
      const agifyData = await agifyResponse.json();

      // Call the Genderize API
      const genderizeResponse = await fetch(`https://api.genderize.io?name=${name}`);
      const genderizeData = await genderizeResponse.json();

      setName(name);
      setAge(agifyData.age);
      setGender(genderizeData.gender);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNameInfo(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {age && gender && (
        <div>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </div>
      )}
    </div>
  );
};

export default NameInfo;
