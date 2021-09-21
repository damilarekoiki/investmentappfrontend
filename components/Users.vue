<template>
  <v-card>
    <v-card-title>
      All users
      <v-spacer></v-spacer>
     
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        color="black"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :single-select="singleSelect"
      item-key="unique_id"
      show-select
      v-model="selected"
    >
      <template v-slot:[`item.name`]="{ item }">
        <article class="tw-flex">
          <Avatar :image="item.img_url" :fullName="item.name" size="30" />
          <div class="tw-py-1 tw-pl-2 tw-font-bold tw-text-xs">
            <DisplayUserText :display="item.name" />
          </div>
        </article>
      </template>
      <template v-slot:[`item.activation_status`]="{ item }">
        <div
          class="
            tw-bg-opacity-10
            tw-p-2
            tw-rounded-sm
            tw-text-xs
            tw-font-bold
            tw-max-w-md
            tw-text-center
          "
          :class="[
            item.activation_status == 1 ? 'tw-bg-blue-300' : 'tw-bg-red-300',
            item.activation_status == 1
              ? 'tw-text-blue-800'
              : 'tw-text-red-800',
          ]"
        >
          {{ item.activation_status == 1 ? 'Active' : 'Inactive' }}
        </div>
      </template>

      <template v-slot:[`item.unique_id`]="{ item }">
        <div class="tw-flex">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="blue" :name="item.unique_id">mdi-pencil</v-icon>
              </v-btn>
            </template>
            <UpdateClientUser />
          </v-dialog>

          <v-dialog v-model="dialog2" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="red" :name="item.unique_id">mdi-delete</v-icon>
          </v-btn>
            </template>
            <ConfirmDelete />
          </v-dialog>
        </div>
      </template>
      <template v-slot:top>
        <div class="tw-flex tw-justify-between">
          <v-switch
            v-model="singleSelect"
            label="Single select"
            class="pa-3"
          ></v-switch>
          <div class="tw-p-3">
            <v-btn icon v-if="selected.length > 0" class="">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </div>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import Avatar from '@/components/Avatar'
import DisplayUserText from '@/components/DisplayUserText'
import UpdateClientUser from '@/components/UpdateClientUser'
import ConfirmDelete from  '@/components/ConfirmDelete'
export default {
  components: {
    Avatar,
    DisplayUserText,
    UpdateClientUser,
    ConfirmDelete
  },
  data() {
    return {
      search: '',
      selected: [],
      dialog: false,
      dialog2: false,
      singleSelect: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'Account number', value: 'personal_account_no' },
        { text: 'Phone', value: 'phone' },
        { text: 'Gender', value: 'gender' },
        { text: 'Activation Status', value: 'activation_status' },
        { text: 'Action', value: 'unique_id' },
      ],
      users: [
        {
          name: 'Fikayomi Adamu Eniola',
          email: 'eniolafikayomi@gmail.com',
          phone: '08179526272',
          personal_account_no: '3093930202',
          gender: 'Male',
          activation_status: '0',
          img_url:
            'https://static.standard.co.uk/2021/04/23/14/newFile-1.jpg?width=968',
          unique_id: 'sys728292s',
        },
        {
          name: 'Esther Iyabo',
          email: 'eniolafikayomi@gmail.com',
          phone: '08179526272',
          personal_account_no: '3093930202',
          gender: 'Male',
          activation_status: '1',
          img_url:
            'https://static.standard.co.uk/2021/04/23/14/newFile-1.jpg?width=968',
          unique_id: 'uwiwjkw9292',
        },
        {
          name: 'Oriyomi Adekunle',
          email: 'eniolafikayomi@gmail.com',
          phone: '08179526272',
          personal_account_no: '3093930202',
          gender: 'Male',
          activation_status: '0',
          img_url:
            'https://static.standard.co.uk/2021/04/23/14/newFile-1.jpg?width=968',
          unique_id: 'dvsbw74561',
        },
        {
          name: 'Timothy Feranmi',
          email: 'eniolafikayomi@gmail.com',
          phone: '08179526272',
          personal_account_no: '3093930202',
          gender: 'Male',
          activation_status: '1',
          img_url: '',
          unique_id: 'nsjs8376',
        },
      ],
    }
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
  },
  watch: {
    selected() {
      console.log(this.selected)
    },
  },
}
</script>
