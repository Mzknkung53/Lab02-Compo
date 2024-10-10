<script setup lang="ts">
import { RouterLink, RouterView, loadRouteLocation } from 'vue-router';
import { useMessageStore } from './stores/message';
import { useAuthStore } from './stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
const store = useMessageStore();
const { message } = storeToRefs(store);
const authStore = useAuthStore();
const router = useRouter();
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
if (token && user) {
 authStore.reload(token,JSON.parse(user))
}else{
  authStore.logout()
}

function logout() {
  authStore.logout();
  router.push({ name: 'login' });
}

</script>

<template>
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav class="py-6">
          <router-link class="font-bold text-gray-700" :to="{ name: 'event-list-view' }" exact-active-class="text-green-500">Event</router-link> |
          <router-link class="font-bold text-gray-700" :to="{ name: 'about' }" exact-active-class="text-green-500">About</router-link> |
          <router-link class="font-bold text-gray-700" :to="{ name: 'add-event' }" exact-active-class="text-green-500">New Event</router-link> |
          <router-link class="font-bold text-gray-700" :to="{ name: 'organizer' }" exact-active-class="text-green-500">Organizer</router-link> |
          <router-link class="font-bold text-gray-700" :to="{ name: 'add-organizer' }" exact-active-class="text-green-500">New Organizer</router-link> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'student' }">Student</RouterLink>

          <ul v-if="!authStore.currentUserName" class="flex navbar-nav ml-auto">
            <li class="nav-item px-2">
              <router-link to="/register" class="nav-link">
                <div class="flex items-center">
                  <span class="ml-3">Sign Up</span>
                </div>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/login" class="nav-link">
                <div class="flex items-center">
                  <span class="ml-3">Login</span>
                </div>
              </router-link>
            </li>
          </ul>

          <ul v-if="authStore.currentUserName" class="flex navbar-nav ml-auto">
            <li class="nav-item px-2">
              <router-link to="/profile" class="nav-link">
                <div class="flex items-center">
                  <span class="ml-3">{{ authStore.currentUserName }}</span>
                </div>
              </router-link>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link hover:cursor-pointer" @click="logout">
                <div class="flex items-center">
                  <span class="ml-3">LogOut</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
h2 {
  font-size: 20px;
}
/* lab 4. 1.5 */
</style>
