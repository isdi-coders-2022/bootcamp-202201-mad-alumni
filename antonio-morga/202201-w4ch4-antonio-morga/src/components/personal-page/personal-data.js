import { useContext, useState } from 'react';
import { Context } from '../context-provider';

/* eslint-disable jsx-a11y/label-has-associated-control */
export function PersonalData() {
  const [formData, setFormData] = useState();

  const { updateUserData } = useContext(Context);

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('hola');
    updateUserData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="personal-data__form">
      <input
        onChange={handleChange}
        className="personal-data__item"
        type="text"
        name="nameData"
        id="name"
        placeholder="name"
        required
      />
      <input
        onChange={handleChange}
        className="personal-data__item"
        type="text"
        name="surname"
        id="surname"
        placeholder="last name"
        required
      />
      <label htmlFor="birthDate">Birth date</label>
      <input
        onChange={handleChange}
        className="personal-data__item"
        type="date"
        name="birthDate"
        id="birthDate"
        required
      />
      <div>
        <p>gender</p>
        <label htmlFor="male">Male</label>
        <input
          onChange={handleChange}
          className="personal-data__item"
          type="radio"
          name="gender"
          value="male"
          id="male"
        />
        <label htmlFor="female">Female</label>
        <input
          onChange={handleChange}
          className="personal-data__item"
          type="radio"
          name="gender"
          value="female"
          id="female"
        />
        <label htmlFor="other">Other</label>
        <input
          onChange={handleChange}
          className="personal-data__item"
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked
        />
      </div>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        placeholder="your@email"
        required
      />
      <label htmlFor="newsletter">
        Check this box if you want to receive our newsletter!
      </label>
      <input
        onChange={handleChange}
        type="checkbox"
        name="newsletter"
        id="newsletter"
      />
      <button type="submit">Next</button>
    </form>
  );
}
