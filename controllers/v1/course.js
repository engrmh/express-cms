exports.getAll = async (req, res) => {
  try {
    const allCourses = await courseModel.find({}).lean();
    return res.status(200).json({ data: allCourses });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.create = async (req, res) => {
  try {
    const {
      title,
      description,
      cover,
      support,
      href,
      price,
      status,
      discount,
      category,
      creator,
    } = req.body;

    const result = await courseModel.create({
      title,
      description,
      cover,
      support,
      href,
      price,
      status,
      discount,
      category,
      creator: req.user._id,
    });

    if (result) {
      return res
        .status(201)
        .json({ message: "Course Created Successfully", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.delete = async (req, res) => {
  //code
};
exports.update = async (req, res) => {
  //code
};
