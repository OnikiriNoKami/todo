const registrationActionsTypes = {
    SET_CREATE_USER_REQUEST: 'set_create_user_request',
    SET_EMAIL_VALID: 'set_email_valid',
    SET_PASSWORD_VALID: 'set_password_valid',
    SET_PASSWORD_VALUE: 'set_password_value',
    SET_EMAIL_VALUE: 'set_email_value',
    SET_RESET_REQUEST: 'set_reset_reg_data_request',
    SET_EMAIL_DIRTY: 'set_email_dirty',
    SET_PASSWORD_DIRTY: 'set_password_dirty',
    SET_NICKNAME_DIRTY: 'set_nickName_dirty',
    SET_NICKNAME_VALID: 'set_nickName_valid',
    SET_NICKNAME_VALUE: 'set_nickName_value',
    SET_NICKNAME_IS_DEFAULT: 'set_nickName_is_default',
    SET_PASSWORD_IS_DEFAULT: 'set_password_is_default',
    SET_EMAIL_IS_DEFAULT: 'set_email_is_default',
    DROP_REGISTRATION_DATA: 'drop_registration_data',
}

export default registrationActionsTypes;