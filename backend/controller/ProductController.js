const { useParams } = require("react-router-dom");
const productModel = require("../models/ProductModel");
const RegisterUserModel = require("../models/userModel/RegisterUserModel");

//store the products in dataBase
exports.storeproductss = async (req, res) => {
  try {
    req.body.user = req.userId; //getting the user id created while userModel is formened and logini//this is just to determine who enter or which admin enter new products
    const {
      name,
      description,
      price,
      category,
      images,
      stock,
      numofReview,
      review,
      user,
      createdAt,
    } = req.body;

    const ProductData = new productModel({
      name,
      description,
      price,
      category,
      images,
      stock,
      numofReview,
      review,
      user,
      createdAt,
    });
    await ProductData.save();
    res.status(200).json({ message: ProductData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get All Product

exports.getAllProduct = async (req, res) => {
  try {
    const ProductData = await productModel.find({});
    res.status(201).json({
      success: true,
      ProductData,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//updateProduct
exports.updateProduct = async (req, res) => {
  const { _id } = req.params;
  try {
    const updatedProducts = await productModel.findByIdAndUpdate(_id, req.body);
    res.status(200).json({ success: true, updatedProducts });
    console.log(updatedProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete the products

exports.deleteTheProducts = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedData = await productModel.deleteOne({ _id });
    res.status(201).json({ success: true, deletedData: deletedData });
  } catch (err) {
    res.status(201).json({ success: false, error: err.message });
  }
};

//getSingleProduct api
exports.particularProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const getParticularData = await productModel.findOne({ _id });
    res.status(201).json({
      success: true,
      message: getParticularData,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};

//serach api for product based on name,category,price
exports.searchProducts = async (req, res) => {
  const { key } = req.params;
  try {
    const searchProduct = await productModel.find({
      $or: [{ name: { $regex: key } }, { category: { $regex: key } }],
    });
    res.status(201).json({ success: true, searchedproduct: searchProduct });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
//pagination api of products

exports.pagination = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 1;
    const skip = (page - 1) * limit;
    console.log(`page:${page}`);
    console.log(`page:${limit}`);
    console.log(`skip:${skip}`);

    const allProducts = await productModel.find().skip(skip).limit(limit);
    res.status(200).json({ success: true, message: allProducts });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//add to cart api
exports.addToCart = async (req, res) => {
  try {
    const { _id } = req.params;
    //find product which want to store at cart
    const findProduct = await productModel.findOne({ _id: _id });
    console.log(findProduct);
    if (!findProduct) {
      res.status(400).json({ message: "product not found" });
    }
    //find user where data is store
    const userID = req.userID;
    const findUser = await RegisterUserModel.findOne(userID);

    let foundProduct = false;

    findUser.cart.forEach((curelem) => {
      if (curelem.product._id == _id) {
        curelem.quantity += 1;
        foundProduct = true;
        return;
      }
    });

    if (!foundProduct) {
      findUser.cart.push({
        product: findProduct,
        quantity: 1,
      });
    }
    await findUser.save();
    res.status(200).json({ user: findUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};

//delete to cart api

exports.deleteCart = async (req, res) => {
  try {
    const { _id } = req.params;
    //find product which want to store at cart
    const findProduct = await productModel.findOne({ _id: _id });
    // console.log(findProduct);
    if (!findProduct) {
      res.status(400).json({ message: "product not found" });
    }
    //find user where data is store
    const userID = req.userID;
    const findUser = await RegisterUserModel.findOne(userID);

    //push the product user cart
    findUser.cart.pop({
      product: findProduct,
      quantity: 0,
    });
    res.status(200).json({ user: findUser });
    await findUser.save();
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};
