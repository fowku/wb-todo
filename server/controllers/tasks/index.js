const { tasksModel } = require('../../models/tasks');

module.exports.tasksGetController = async (req, res) => {
  const tasks = await tasksModel.value();

  setTimeout(() => res.status(200).json({ tasks }), 500);
};

module.exports.tasksPostController = async (req, res) => {
  const id = `${new Date()}_${Math.random()}`;
  const { data } = req.body;

  await tasksModel
    .push({
      id,
      data,
      isCompleted: false,
    })
    .write();

  setTimeout(
    () =>
      res.status(200).json({
        id,
      }),
    300,
  );
};

module.exports.tasksPutController = async (req, res) => {
  const {
    task: { id, data, isCompleted },
  } = req.body;

  await tasksModel.find({ id }).assign({ data, isCompleted }).write();

  setTimeout(() => res.status(200).json({}), 300);
};

module.exports.tasksDeleteController = async (req, res) => {
  const { id } = req.body;

  await tasksModel.remove({ id }).write();

  setTimeout(() => res.status(200).json({}), 300);
};
