import User from "../Models/User";
import bcrypt from "bcryptjs";

export const getAllUser = async(req, res, next) => {
    let users;
    try {
        users = await User.find();  
    } catch (err) {
        console.log(err); 
    }
    if(!users)
    {
        return res.status(404).json({message : "No User found"});
    }
    return res.status(200).json({users});
};

export const signup = async(req, res, next) => {
    const{ name, email, password} = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);    
    }

    if(existingUser){
        return res
        .status(400)
        .json({message: "User Already Exist! Login Instead"})
    }
    const hashedPassword = bcrypt.hashSync(password);

    const user= new User({
        name,
        email,
        password : hashedPassword,
        blogs : [],
    });


    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res
    .status(201)
    .json({user})
    
};

export const login = async (req, res, next) => {
    const{email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);    
    }

    if(!existingUser){
        return res
        .status(404)
        .json({message: "Cannot find User by this Email Id"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message : "Incorrect Password"})
    }

    return res.status(200).json({message : "Login Successfully"})

};

export const getbyId = async(req, res, next) => {
    const Id = req.params.id;
    let user;
    try {
        user = await User.findById(Id);
    } catch (err) {
        console.log(err);
    }
    if(!user)
    {
        return res.status(404).json({message : "User does not exist"});
    }

    return res.status(200).json({user});
};