import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CardContent, Typography } from '@mui/material';


export function MuiAutocomplete({inputValue,setInputValue,nickName,memberId,setCollection, setValue}) {
const options=["全部"]
nickName.map((res)=>{
options.push(res)
})

  useEffect(()=>{
    if(inputValue){
      setValue(memberId[nickName.indexOf(inputValue)])
      setCollection("all")
    }  
    if(!inputValue||inputValue=="全部"){
      setValue("all")
      setCollection("all")
    }
  },[inputValue])
  
  return (
    <>
    <CardContent>
         <Typography sx={{ fontSize: "3vmin",color:"#fff",fontWeight:"bold" }} >
        會員名稱
        </Typography>
      <Autocomplete
        value={inputValue}
        onChange={(event, newValue) => {
          setInputValue(newValue)
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: "100%",mt:2 }}
        renderInput={(params) => <TextField {...params}  />}
      /> 
    </CardContent>
   
    </>
  );
}
