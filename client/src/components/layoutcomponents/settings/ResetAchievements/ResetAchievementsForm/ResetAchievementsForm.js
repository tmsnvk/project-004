import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, Submit } from "components/commoncomponents/form-related";

const ResetAchievementsForm = () => {  
  const { handleSubmit } = useForm();
  const history = useHistory();

  const [resetAchievements, setResetAchievements] = useState(false);

  const onSubmit = (data) => setResetAchievements(true);

  useEffect(() => {
    if (!resetAchievements) return;

    const handleAccountDelete = async () => {
      try {
        await axios.put("/achievement/reset");
        history.push("/page/success");
        history.go();
      } catch (error) {
        console.log(error);
      }
    };

    handleAccountDelete();
    return () => setResetAchievements(false);
  }, [resetAchievements, history, setResetAchievements]);

  return (
    <Form method="PUT" action="/achievement/reset" id="achivements-reset" onSubmit={handleSubmit(onSubmit)}>
      <Submit type="submit" value="reset" backgroundColor="warning" />
    </Form>
  );
};

export default ResetAchievementsForm;