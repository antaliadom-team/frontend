import styles from "./edit-profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput, TextInput } from "../../../components/ui/inputs";
import { GhostButton, PrimaryButton } from "../../../components/ui/buttons";
import { openPasswordChanged } from "../../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../../store/users-api";
import ProtectedRoute from "../../../components/protected-route/protected-route";

const EditProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [updateUser] = useUpdateUserMutation();
    const { user } = useSelector((store) => store.user);

    const { control, handleSubmit } = useForm({
        mode: "all",
        defaultValues: {
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
        },
    });

    const onSubmit = (formData) => {
        dispatch(openPasswordChanged());
        const data = {};
        for (const key in formData) {
            if (formData[key] !== user[key]) {
                data[key] = formData[key];
            }
        }
        updateUser(data);
    };

    return (
        <ProtectedRoute>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Редактировать профиль</h2>
                    <Link className={styles.link} to="/edit-password">
                        Изменить пароль
                    </Link>
                    <ul className={styles.list}>
                        <li>
                            <Controller
                                control={control}
                                name="first_name"
                                render={({ field }) => (
                                    <TextInput
                                        name={"first_name"}
                                        label="Ваше имя*"
                                        placeholder={user.first_name}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </li>
                        <li>
                            <Controller
                                control={control}
                                name="last_name"
                                render={({ field }) => (
                                    <TextInput
                                        name={"last_name"}
                                        label="Ваша фамилия*"
                                        placeholder={user.last_name}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </li>
                        <li>
                            <TextInput
                                name={"email"}
                                label="Ваш e-mail*"
                                disabled={true}
                                readOnly={true}
                                value={user.email}
                            />
                        </li>
                        <li>
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                    <PhoneInput
                                        name={"phone"}
                                        text="Номер телефона*"
                                        currentPhone={user.phone}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </li>
                    </ul>
                    <div className={styles.buttons}>
                        <PrimaryButton isSubmit={true}>Сохранить</PrimaryButton>
                        <GhostButton onClick={() => navigate(-1)}>Отменить</GhostButton>
                    </div>
                </div>
            </form>
        </ProtectedRoute>
    );
};

export default EditProfile;
