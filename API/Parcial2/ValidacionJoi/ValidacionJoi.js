const validation=(schema)=>{
  let joiValidation=(req,res,next)=>{
    console.log(req.query);
    let {error} = schema.validate(req.query,{abortEarly:false});
    console.log(error);
    if(error){
      let{details}=error;
      res.status(422).json({error:details});
    }else{
      next();
    }
  }
  return joiValidation;
};
module.exports = validation;