import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {

        //structure of user db

        _id: {type:String, required: true},//userid is stirng 
        name: {type:String, required: true},  //userbame is string
        email: {type:String, required: true},//user email is string
        imageUrl: {type:String, required: true},
        enrolledCourses: [//enrolled are formed array bcoz  that r also various parts
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
    }, {timestamps: true}
);
//user model
const User = mongoose.model('User', userSchema)

export default User;
