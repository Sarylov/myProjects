let getAllProjects = (data) => {
  let res = [];
  data.forEach((year) => {
    year[1].forEach((project) => {
      res.push(project);
    });
  });
  return res;
};

export default getAllProjects;
