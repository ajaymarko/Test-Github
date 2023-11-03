import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import RefComponent from "./RefComponent";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log("firstName:", watch("firstName"));
  console.log("errors:", errors);

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const newRef = useRef(null);
  const refElement = newRef.current;
  console.log("refElement:", refElement);

  useEffect(() => {
    if (refElement) {
      refElement.style.backgroundColor = "red";
    }
  }, [refElement]);

  return (
    <div className="main-container">
      <RefComponent ref={newRef} />

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="input-container">
          <label htmlFor="firstName">
            First Name
            <div className="error-containner">
              {errors?.firstName?.required && <span>*</span>}
            </div>{" "}
            :{" "}
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
          />
        </div>

        <div className="input-container">
          <label htmlFor="lastName">
            Last Name
            <div className="error-containner">
              {errors?.lastName?.required && <span>*</span>}
            </div>{" "}
            :{" "}
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: true,
              minLength: { value: 4, message: "Enter atleast 4 characters" },
            })}
          />
          <div>
            {errors?.lastName && (
              <div className="error-bottom-div">
                {errors?.lastName?.message}
              </div>
            )}
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="age">
            Age
            <div className="error-containner">
              {errors?.age && <span>*</span>}
            </div>{" "}
            :{" "}
          </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: true,
              min: { value: 18, message: "Only 18+" },
            })}
          />
          <div>
            {errors?.age && (
              <div className="error-bottom-div">{errors?.age?.message}</div>
            )}
          </div>
        </div>

        <div className="input-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
