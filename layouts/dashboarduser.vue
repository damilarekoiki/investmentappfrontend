<template>
    <v-app>


        <v-app-bar app clipped-left flat elevation="3"  height="82px" color="white">
            <span class="tw-pr-2">
                <v-app-bar-nav-icon color="#36454f"></v-app-bar-nav-icon>
            </span>

            <v-toolbar-title>
                <img src="/img/fklogo2.png" alt="" style="width:100px">
            </v-toolbar-title>
            <!-- <span class="tw-font-bold tw-absolute tw-left-52 tw-transform tw-scale-y-150">Investment App</span> -->
            <v-spacer></v-spacer>

            <span class="tw-pr-3">
                Dashboard
            </span>

            <span>
                <v-btn color="success">
                    Login
                </v-btn>
            </span>
        </v-app-bar>

        <v-navigation-drawer app clipped flat  color="white">
            <v-list nav dense class="tw-mt-5">
                <div v-for="(link, i) in links" :key="i" style="color:#36454f !important">

                    <v-list-item
                        v-if="!link.subLinks"
                        :to="`/${link.to}`"
                        class="tw-mb-5"
                    >
                        
                        <v-list-item-icon>
                            <v-icon color="#36454f">{{ link.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title v-text="link.text" style="color:#36454f !important;" />
                    </v-list-item>

                    <v-list-group
                        v-else
                        :key="link.text"
                        class="tw-mb-5 sidebar-link-group"
                        :value="subIsActive('/parentroute')"
                    >
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon style="color:#36454f !important;">{{ link.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title style="color:#36454f !important;">
                                {{ link.text }}
                            </v-list-item-title>
                        </template>

                        <v-list-item
                            v-for="sublink in link.subLinks"
                            :to="`/${sublink.to}`"
                            :key="sublink.text"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ sublink.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title style="color:#36454f !important;">
                                {{ sublink.text }}
                            </v-list-item-title>

                        </v-list-item>

                    </v-list-group>

                </div>

                <!-- <div>
                    <v-list-item
                        @click="logout"
                        class="tw-mb-5"
                    >
                        
                        <v-list-item-icon>
                            <v-icon style="color: #36454f !important">
                                {{ logoutLink.icon }}
                            </v-icon>
                        </v-list-item-icon>

                        <v-list-item-title v-text="logoutLink.text" style="color: #36454f !important" />
                    </v-list-item>
                </div> -->

            </v-list>
        </v-navigation-drawer>

        <v-main class="tw-bg-green-100 tw-bg-opacity-25 tw-h-full">
            <Nuxt />
        </v-main>
            
    </v-app>
</template>

<script>
export default {
    data: () => ({
        navbarlist: [
            { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
            { icon: "mdi-upload", text: "Upload", route: "/upload" },
        ],
        links: [
            {
                to     : '',
                icon   : 'mdi-home-outline',
                text   : 'Dashboard',
            },
            {
                icon     : 'mdi-account-circle-outline',
                text     : 'Profile',
                subLinks : [
                    {
                        text : 'Update profile',
                        to    : 'update-profile',
                    }
                ]
            },
            {
                icon     : 'mdi-office-building-outline',
                text     : 'Assets',
                subLinks : [
                    {
                        text : 'View assets',
                        to    : 'view-assets',
                    },
                ]
            },
            {
                icon     : 'mdi-domain',
                text     : 'Models',
                subLinks : [
                    {
                        text : 'View models',
                        to    : 'view-models',
                    }
                ]
            },
            {
                icon     : 'mdi-handshake-outline',
                text     : 'Referral',
                subLinks : [
                    {
                        text : 'Referral history',
                        to    : 'my-referrals',
                    },
                    {
                        text : 'Refer a friend',
                        to    : 'refer-a-friend',
                    },
                ]
            },
            {
                icon     : 'mdi-wallet-travel',
                text     : 'Wallet',
                subLinks : [
                    {
                        text : 'Wallet withdrawal',
                        to    : 'wallet-withdrawal',
                    },
                    {
                        text : 'Fund wallet',
                        to    : 'fund-wallet',
                    },
                    {
                        text : 'Recent withdrawal',
                        to    : 'recent-wihdrawal',
                    },
                    {
                        text : 'Recent deposit',
                        to    : 'recent-deposit',
                    },
                ]
            },
            {
                icon     : 'mdi-account-group-outline',
                text     : 'Users',
                subLinks : [
                    {
                        text : 'View users',
                        to    : 'view-users',
                    }
                ]
            },
            {
                icon     : 'mdi-shield-account-outline',
                text     : 'Admins',
                subLinks : [
                    {
                        text : 'View admins',
                        to    : 'view-admins',
                    }
                ]
            },
        ],
    }),
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input];
            return paths.some((path) => {
                return this.$route.path.indexOf(path) === 0; // current path starts with this path string
            });
        },
    }
}
</script>

<style>

    .v-list-item__title, .v-list-item__action{
        color: #36454f !important;
    }

    .v-list-item:hover  .v-list-item__title{
        font-weight: bold !important;
    }

    .sidebar-link-group .v-list-group__header__append-icon .v-icon {
        color: #36454f;
    } 

</style>