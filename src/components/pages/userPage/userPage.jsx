import React from "react"

const UserPage = () => {
    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading > 0 &&
                    currentUser.qualities.length > 0 &&
                    Object.keys(professions).length > 0 ? (
                        <form onSubmit={handleSubmit} className="ms-3">
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выберите свою профессию"
                                defaultOption="Выбрать..."
                                options={professionsList}
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                                name="profession"
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                options={qualitiesList}
                                onChange={handleChange}
                                name="qualities"
                                label="Выберите ваши качества"
                                defaultValue={data.qualities}
                            />
                            <button
                                type="submit"
                                disabled={isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Изменить
                            </button>
                        </form>
                    ) : (
                        <h1 className="ms-3">Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserPage
