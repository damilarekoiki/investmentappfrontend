// const entryLocal = 'https://investmentapp.staging.cloudware.ng/public'
const entryLocal = '192.168.100.27:8000'
const apiEntryLocal = `${entryLocal}/api`
const userAuthEntry = `${apiEntryLocal}/auth/user`;

export const state = () => ({
    auth: {
        user: {
            
            register: `${userAuthEntry}/register`,
            forgotPassword: `${userAuthEntry}/forgot_password`,
            resetPassword: `${userAuthEntry}/reset_password`,
        },
    },
    payment: {
        
    },
    user: {
        
        updateBasicDetails: `${apiEntryLocal}/user/update_basic_details`,

    },
    admin: {
        addAsset: `${apiEntryLocal}/asset`,
        addModel: `${apiEntryLocal}/model`,
        fetchAssets: `${apiEntryLocal}/asset`,
        fetchModels: `${apiEntryLocal}/model`,



    },
    
    fileStorage: `${entryLocal}/storage`
})

export const getters = {
    getUrls: (state) => {
        return state;
    }
}