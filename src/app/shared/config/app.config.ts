const pdf = ['pdf'];
const image = ['jpeg', 'png', 'jpg', 'gif'];
const video = ['3gp', '3gpp', '3gpp2', 'octet-stream', 'avi', 'flv', 'mov', 'mp4', 'mpg', 'mpeg', 'mpeg-2'];
export const config = {

    routePaths: {
        rootUrl: '/',
        root: '',
        posts: 'posts',
        listPosts: 'posts/posts',
        addPost: 'add-post',
        editPostView: 'edit-post/:id',
        postView: 'view-post/:id',
        pageNotFound: 'not-found',
        signin: 'login',
        signup: 'register',
        forgotPassword: 'forgot-password',
        resetPassword: 'reset-password',
        emailVerificationAlert: 'email-verification',
        resetPasswordVerification: 'reset-password-verification',
        gallery: 'gallery',
        addProduct: 'add-product',
        list: 'listing',
        details: 'details',
        userRole: 'user-role',
        errors: 'errors',
        exportCsv: 'export-csv',
        profile: 'profile',
        csvActivities: 'csv-activities',
        export: 'export',
        newExport: 'new-export',
        manageTemplates: 'manage-templates',
        editProfile: 'edit-profile',
        editPost: 'edit-post'
    },
    imgPath: '../../assets/images/',
    productThumbNail: 'product-image.png',
    routesConstants: [
        {
            title: 'profile', url: '/profile', permission: 'view_profile', menu: true, showAlways: true
        }
    ],
    blank: '',
    SPACE: ' ',
    UNDERSCORE: '_',
    minus: '-',
    trueStr: 'true',
    hide: 'Hide',
    show: 'Show',
    apiMethods: {
        post: 'post',
        put: 'put',
        delete: 'delete',
        get: 'get',
        patch: 'patch',
    },
    apiUrls: {
        signUp: 'v1/users',
        login: 'v1/sessions',
        logout: 'v1/sessions/logout',
        forgotPassword: 'v1/forgot/password',
        resetPassword: 'v1/reset/password/',
        resendVerificationMail: 'v1/resend/verification/email',
        changePassword: 'v1/password',
        USER_ME:"v1/users/me",
        GET_PROFILE_IMAGE:"v1/users/get-profile-image",
        FILE_UPLOAD_IN_DB:"v1/uploads/file-upload-in-db",
        FILE_UPLOAD_IN_DIR:"v1/uploads/file-upload-in-directory",
        POSTS:"v1/posts",
        DeletePost:"v1/posts",
        editPost:"v1/posts/update",
        getPost:"v1/posts"
    },
    apiFileUrls: {
        'defaultExportTemplate': 'v1/default-export-template.json'
    },
    validations: {
        maxLength50: 50,
        maxLength28: 28,
        maxLength40: 40,
        maxLength150: 150,
        maxLength250: 250,
        maxLength16: 16,
        maxLength17: 17,
        maxLength10: 10,
        maxLength80: 80,
        maxLength5000: 5000,
        maxLength2000: 2000,
        maxLength500: 500,
        maxLength25: 25,
        maxNumber: 9999999999,
        minNumber: 0,
        maxLength20: 20,
        charRegex: '^[a-zA-Z]+$',
        fullNameRegex:'/^[a-z][a-z\s]*$/',
        charNumRegex: '^[a-zA-Z0-9]+$',
        charNumberSpecialRegex: '^(?=.*[A-z])[A-z0-9-+%,:&\(\)/.\//\/ \[\\\]\']+$',
        sku: '^[a-zA-Z0-9-+.]+$',
        emailRegex: '^[\\w._-]+[+]?[\\w._-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$',
        pwdRegex: '^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&_()#])([a-zA-Z0-9$@$!%*?&_()#])+$',
        urlRegex: '^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}',
        minLenght8: 8,
        material: '^[a-zA-Z0-9-\'/%+&/ \]+$',
        numberMask: 'coma_separator.2',
        onlyNumber: '^[0-9.,]+$',
    },
    apiStatusCode: {
        serverError: 500,
        notFound: 404,
        SUCCESS: 200,
        NotFound: 404,
        NotAuthenticated: 403,
        NotAuthorized: 401,
        timeout: 408,
        success: 200,
        notModified: 304,
        fileNotUploaded: 413,
    },
    apiErrorTypes: {
        permissionChange: 'permission_change',
        not_verified: 'not_verified',
    },
    messages: {
        pwdHint: 'Password must have at least 8 characters, one capital, one special character & one number.',
        unKnownMethod: 'Unknown request method.',
        resetPassword: 'A link to reset your password has been sent to your registered email address.',
        resetPassVerificationMsg: 'You have successfully reset your password. You can now sign in to your account with your new password.',
        tokenNotFound: '',
        resendVerificationMailMsg: '',
        copyToclipBoardMessage: 'Link is copied to clipboard.',
        mediaUploadError: 'couldn’t be uploaded',
        files: 'Files',
        navigationConfiemMsg: 'Upload in progress! Please wait till the upload is complete.',
        fileUploadlimitExceed: 'You can\'t upload more than number file(s)',
        noResults: 'No Results Found',
        defaultTextGallery: 'Add all your files(pdf, videos and images) here to create links those can be used in your CSV Upload Files',
        expireToken: 'Your reset password link has been expired. Please resend again.',
        mediaRemoved: 'Media has been removed successfully.',
        mediaAlreadyRemoved: 'Either media is already removed or it does not exists on server. Please try reloading your page.',
        userInvitedToCompany: 'User is invited successfully!',
        userAlreadyInvitedToCompany: 'Email address is already registered, Please try another one!',
        unknownError: 'Somthing went wrong, Please try again!',
        invalidToken: 'Provided token is invalid or it does not exists!',
        userDeleted: 'User has been removed successfully.',
        loggedOut: 'You are logged out.',
        loggedOutByPermissions: 'You are logged out due to the permissions update.',
        notAuthorized: 'You are not authorized to perform this operation.',
        profileUpdated: 'Your profile has been updated.',
        passwordChanged: 'Your password has been changed.',
        requestTimeout: 'Your request has been timeouted out, Please check your internet connection.',
        noInternet: 'No Internet Connection. Please check',
        allowedSkuLimit: 'allowed_sku_limit',
        sku: 'sku',
        product_code: 'product_code',
        upc: 'upc_ean',
        variantName: 'variant_name',
        productDeleted: 'Product has been deleted successfully.',
        variantUpdate: 'Variant has been updated successfully.',
        passwordNotMatch: 'The current password doesn\'t match.',
        statusUpdated: 'Status has been updated for selected variants.',
        templateUpdated: 'Template has been updated successfully.',
        templateRemoved: 'Template has been removed successfully.',
        templateCreated: 'Template and export job created successfully, We will notify soon.',
        exportAnyWay: 'You will receive an email once export is completed.',
        variantDeleted: ' has been deleted successfully.',
        confimationMessageDefault: 'Are you sure?',
        conMesVariantActivate: 'Activate & Publish Variant?',
        conMesProductActivate: 'Activate & Publish Product?',
        empty: 'It’s all empty here',
        'add-product': 'to add/edit products',
        gallery: 'to access gallery',
        products: 'to access products',
        'user-role': 'to access user role',
        'csv-activities': 'to access csv activities',
        maxUserInvited: 'You can not invite more than 10 members.',
        imageUpdateMessage: 'has been updated successfully.',
        imageAddMessage: 'has been added successfully.',
        exceedSkuLimit: 'Company has no remaining sku to add.',
        csvExtention: 'Invaild file format. Only csv is allowed to import.'

    },
    errorType: {
        exportTemplateLimitExceed: 'limit_exceed',
        exportTemplateDuplicateName: 'duplicate_name'
    },
    cssClasses: {
        success: 'alert alert-success alert-top',
        error: 'alert alert-error alert-top',
        confirmModal: 'confirm-modal',
        modalXS: 'modal-extra-small',
        modalS: 'modal-small',
        imageUploaded: 'image-uploaded',
        modalM: 'modal-medium',
        deleteModal: 'delete-product-modal',
        csvActivitySuccess: 'success',
        csvActivityFailed: 'failed',
        csvActivityInProgress: 'in-progress',
    },
    messagesTimeout: 4000,
    mediaUploadlimit: 5,
    startPage: 1,
    pageSize: 10,
    productMenu: ['General', 'Pricing', 'Content', 'Digital Assets', 'Product', 'Package', 'Case Pack', 'Marketplace Links'],
    productMenuForDetails: ['General', 'Pricing', 'Content', 'Product', 'Package', 'Case Pack', 'Marketplace'],
    pdf: pdf,
    image: image,
    video: video,
    allowedMedia: pdf.concat(image, video),
    addProductAssets: [
        { label: 'Thumbnail', quantity: 1, type: 'image', key: 'thumbnail', msg: 'Thumbnail' },
        { label: 'Main image', quantity: 1, type: 'image', key: 'main', msg: 'Main image' },
        { label: 'Additional Images', quantity: 6, type: 'image', key: 'additional', msg: 'Additional image' },
        { label: 'Lifestyle Images', quantity: 6, type: 'image', key: 'lifestyle', msg: 'Lifestyle image' },
        { label: 'Collection Image', quantity: 1, type: 'image', key: 'collection', msg: 'Collection image' },
        { label: 'Product Videos', quantity: 2, type: 'video', key: 'video', msg: 'Product Video' }
    ],
    certifications: { label: 'Certifications', quantity: 2, type: 'pdf', key: 'certification', msg: 'Certificate' },
    cofirmationPopUp: {
        cancelProduct: {
            title: 'You haven\'t saved the changes.',
            message: 'The changes will be discarded.',
            buttonCancel: 'Leave Anyway',
            buttonOk: 'Stay on this Page'
        },
        addProductSuccess: {
            title: 'Product has been saved',
            message: 'Do you wish to create another variant?',
            buttonCancel: 'Not Now',
            buttonOk: 'Let\'s add'
        },
        mediaRemoveFromProduct: {
            title: 'Do you want to remove this file from gallery also?',
            message: '',
            buttonCancel: 'Delete here only',
            buttonOk: 'Delete from both'
        },
        addVariantSuccess: {
            title: 'Variant has been saved',
            message: 'Do you wish to create another variant?',
            buttonCancel: 'Not Now',
            buttonOk: 'Let\'s add'
        },
        deleteProduct: {
            title: 'Do you want to delete this product?',
            message: 'Deleting this product will delete all its variants.',
            buttonCancel: 'Cancel',
            buttonOk: 'Delete'
        },
        draftDelete: {
            title: 'Do you want to delete this product?',
            message: '',
            buttonCancel: 'Cancel',
            buttonOk: 'Delete'
        },
        exportTemplateDelete: {
            title: 'Do you want to remove this template?',
            message: '',
            buttonCancel: 'Cancel',
            buttonOk: 'Delete'
        },
        deleteVariant: {
            title: 'Do you want to delete this variant?',
            buttonCancel: 'Cancel',
            buttonOk: 'Delete'
        },
        removeCsvActivity: {
            title: 'Do you want to delete this activity?',
            buttonCancel: 'Cancel',
            buttonOk: 'Delete'
        },
        mediaDeleteConfirmation: {
            title: 'This file is linked to:',
            message: '',
            buttonCancel: 'Cancel',
            buttonOk: 'Remove anyway'
        }
    },
    productStatus: {
        active: 'ACTIVE',
        inactive: 'INACTIVE',
        discontinue: 'DISCONTINUE',
        inprogress: 'INPROGRESS',
    },
    userType: {
        admin: 'admin',
        user: 'user'
    },
    product: 'Product',
    variant: 'Variant',
    add: 'Save',
    edit: 'Update',
    exportTemplateStatus: {
        active: 'ACTIVE',
        temp: 'TEMP'
    },
    scrollOffset: -150,
    defaultMediaCount: 40,
    statusButtonText: { ACTIVE: 'Activate', INACTIVE: 'Deactivate', DISCONTINUE: 'Discontinue' },
    animations: {
        inOut: 'InOut',
    },
    csvActivityType: {
        export: 'export',
        import: 'import'
    },
    permissions: {
        viewGallery: 'view_gallery',
        editGallery: 'edit_gallery',
        viewProducts: 'view_products',
        editProducts: 'edit_products',
        viewOrders: 'view_orders',
        editOrders: 'edit_orders',
        viewInventory: 'view_inventory',
        editInventory: 'edit_inventory',
        viewRole: 'view_role',
        editRole: 'edit_role',
        viewProfile: 'view_profile'
    },
    csvActivityStatus: {
        inprogress: 'INPROGRESS',
        processing: 'PROCESSING',
        success: 'SUCCESS',
        failed: 'FAILED'
    },
    maxVariantInAProduct: 50,
    maxUserInvited: 10,
    invited: 'invited',
    perPageOptions: [10, 25, 50, 100]
};




