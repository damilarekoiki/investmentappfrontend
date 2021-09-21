<template>
  <section>
    <section>
      <span class="tw-text-2xl tw-font-bold md:tw-w-6/12 tw-w-full">Users</span>
      <span class="">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="blue">mdi-plus</v-icon>
            </v-btn>
            Create New User
          </template>
          <v-card>
              <v-card-title>
                  Create new user
              </v-card-title>
              <v-card-text>
            <CreateUsers />
              </v-card-text>
          </v-card> </v-dialog
      ></span>
    </section>
    <main class="tw-pt-6">
      <Users />
    </main>
  </section>
</template>

<script>
import Users from '@/components/Users'
import CreateUsers from '@/components/CreateUsers'
export default {
  layout: 'dashboardadmin',
  components: {
    Users,
    CreateUsers,
  },
  data() {
    return { dialog: false }
  },
}
</script>

<style></style>
