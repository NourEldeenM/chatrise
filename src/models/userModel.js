const mongoose = require("../config/mongoose");

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
    },
    profilePicture: {
        type: String, // URL to the profile picture
        default: "https://placehold.co/300x300"
    },
    bio: {
        type: String,
    },
    location: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    phoneNumber: {
        type: String,
    },
    website: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    joinDate: {
        type: Date,
        default: Date.now,
    },

    // Social Information
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', // Refers to other users
    // }],
    // following: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // }],
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post', // Assuming you have a Post schema
    // }],
    // likes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post',
    // }],
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment', // Assuming you have a Comment schema
    // }],
    // stories: [{
    //     type: String, // URLs or references to the story content
    // }],
    // tags: [String], // List of tags associated with the user

    // Activity Data
    // postCount: {
    //     type: Number,
    //     default: 0,
    // },
    // followerCount: {
    //     type: Number,
    //     default: 0,
    // },
    // followingCount: {
    //     type: Number,
    //     default: 0,
    // },
    // lastActive: {
    //     type: Date,
    // },
    // interactions: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Interaction', // Assuming you have an Interaction schema
    // }],
    // engagementScore: {
    //     type: Number,
    //     default: 0,
    // },

    // Privacy & Security
    // isPrivate: {
    //     type: Boolean,
    //     default: false,
    // },
    // blockedUsers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // }],
    // twoFactorAuthEnabled: {
    //     type: Boolean,
    //     default: false,
    // },
    // verified: {
    //     type: Boolean,
    //     default: false,
    // },
    // lastPasswordChange: {
    //     type: Date,
    // },

    // Notification Settings
    // emailNotifications: {
    //     type: Boolean,
    //     default: true,
    // },
    // pushNotifications: {
    //     type: Boolean,
    //     default: true,
    // },
    // messageNotifications: {
    //     type: Boolean,
    //     default: true,
    // },
    // mentionNotifications: {
    //     type: Boolean,
    //     default: true,
    // },
    // followerNotifications: {
    //     type: Boolean,
    //     default: true,
    // },

    // User Preferences
    // language: {
    //     type: String,
    //     default: 'en',
    // },
    // contentPreferences: [String],
    // adPreferences: [String],

    // Messaging & Communication
    // directMessages: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Message',
    // }],
    // unreadMessagesCount: {
    //     type: Number,
    //     default: 0,
    // },
    // mutedUsers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // }],
    // groupChats: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'GroupChat',
    // }],

    // Analytics & Insights
    // postReach: {
    //     type: Number,
    //     default: 0,
    // },
    // engagementRate: {
    //     type: Number,
    //     default: 0,
    // },
    // profileViews: {
    //     type: Number,
    //     default: 0,
    // },
    // storyViews: {
    //     type: Number,
    //     default: 0,
    // },

    // Monetization (Optional)
    // subscriptionStatus: {
    //     type: Boolean,
    //     default: false,
    // },
    // creatorEarnings: {
    //     type: Number,
    //     default: 0,
    // },
    // sponsoredPosts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'SponsoredPost',
    // }],
    // paymentMethods: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'PaymentMethod',
    // }],

    // Account Management
    // accountStatus: {
    //     type: String,
    //     enum: ['active', 'suspended', 'banned'],
    //     default: 'active',
    // },
    // deactivationDate: {
    //     type: Date,
    // },
    // lastLogin: {
    //     type: Date,
    // },
    // deviceTokens: [String], // For multi-device login support

    // Miscellaneous
    // isAdmin: {
    //     type: Boolean,
    //     default: false,
    // },
    // preferredContent: {
    //     type: String,
    //     enum: ['video', 'images', 'text'],
    // },
    // userLevel: {
    //     type: String,
    //     default: 'Beginner',
    // },

    // // Enhanced Profiles
    // badges: [String],
    // userInterests: [String],
});

const userModel = mongoose.model('User', userSchema);
module.exports = { userModel };