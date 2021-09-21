<template>
  <section>
    <div class="md:tw-flex">
      <div class="md:tw-w-6/12 tw-w-full">
        <section>
          <span class="tw-text-2xl tw-font-bold"> Create User </span>
        </section>
        <main class="tw-pt-6">
          <CreateUsers />
        </main>
      </div>
      <div class="md:tw-w-6/12 tw-w-full">
        <main class="tw-pt-6 md:tw-px-16 tw-px-1">
          <v-card color="white" elevation="2" outlined>
            <v-card-title>Recents users</v-card-title>

            <v-card-text>
              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-4/12">Oyebode Yusuf</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Damilare Kioki</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Oyebode Yusuf</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Damilare Kioki</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Oyebode Yusuf</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Damilare Kioki</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Oyebode Yusuf</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
              <div
                class="
                  tw-flex
                  tw-bg-green-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Damilare Kioki</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>

              <div
                class="
                  tw-flex
                  tw-bg-blue-400
                  tw-justify-between
                  tw-p-2
                  tw-mt-2
                  tw-rounded-md
                  tw-bg-opacity-25
                "
              >
                <div class="tw-w-6/12">Damilare Kioki</div>
                <div class="tw-w-6/12">4th July, 2021</div>
              </div>
            </v-card-text>
          </v-card>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import CreateUsers from '@/components/CreateUsers'
export default {
  layout: 'dashboardadmin',
  components: { CreateUsers },
  data: () => ({
    items: ['Fixed per square meter', 'Profit sharing using Percentage'],
    values: [1, 2],
    value: null,
    support: ['Allow support', 'Do not allow support'],
    support_values: [1, 2],
    manage: ['Farmkonnect', 'Not Farmkonnect'],
    manage_values: [1, 2],
    purchase: ['Full Purchase', 'Part Purchase'],
    purchase_values: [1, 2],
    state: ['Lagos', 'Osun', 'Oyo'],
    state_value: [1, 2],
    lga: ['Ibadan-north', 'Ife', 'Lekki'],
    lga_value: [1, 2, 3],
    gender: ['Female', 'Male', 'Prefer Not To Say'],
    gender_values: [1, 2, 3],
    show: false,
    password: 'Password',
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>
