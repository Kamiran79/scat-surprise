import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getbirbsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allBirbs = response.data;
      const myBirbs = [];
      if (allBirbs) {
        Object.keys(allBirbs).forEach((birbId) => {
          const birb = allBirbs[birbId];
          birb.id = birbId;
          myBirbs.push(birb);
        });
      }
      resolve(myBirbs);
    })
    .catch((err) => reject(err));
});

const getSingleBirbById = (birbId) => axios.get(`${baseUrl}/birbs/${birbId}.json`);

const deleteBirb = (birbId) => axios.delete(`${baseUrl}/birbs/${birbId}.json`);

const createBirb = (newBirb) => axios.post(`${baseUrl}/birbs.json`, newBirb);

const updateBirb = (birbId, editedBirb) => axios.put(`${baseUrl}/birbs/${birbId}.json`, editedBirb);

export default {
  getbirbsByUid,
  getSingleBirbById,
  deleteBirb,
  createBirb,
  updateBirb,
};
