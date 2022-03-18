const { User } = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { status: 'active' }
    });

    //console.log(user);
    //if(!user){
    if (user.length === 0) {
      res.status(400).json({
        status: 'error',
        message: 'There are not users until'
      });
      return;
    }

    res.status(201).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    console.log(error);
  }
};


exports.createUser = async (req, res) =>{
    try {
        const {username, email, password, role}= req.body
        const user = await User.create({
            username: username, 
            email: email, 
            password: password, 
            role: role
        })

        res.status(200).json({
            status: 'success',
            data:{
                user
            }
        })
    } catch (error) {

        console.log(error)
        
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {id: id, status: 'active'}
        })

        if(!user) {
            res.status(404).json({
                status: 'error',
                message: `The id ${id} selected was not found`
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })

    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body
        const user = await User.create({
            username: username,
            email: email,
            password: password, 
            role: role
        })

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })

    } catch (error) {
        console.log(error);
    }

}