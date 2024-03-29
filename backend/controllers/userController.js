const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");


// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name, 
      email,
      password,
      avatar: {
        public_id: "this is a simple id",
        url: "profilepicUrl",
      },
    });

    const token = user.getJWTToken();
    res.status(201).json({
      success: true,
      token,
    });
  });

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400)); // ErrorHander should be ErrorHandler
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401)); // ErrorHander should be ErrorHandler
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401)); // ErrorHander should be ErrorHandler
  }
  const token = user.getJWTToken();
  res.status(200).json({
    success: true,
    token,
  });
});

