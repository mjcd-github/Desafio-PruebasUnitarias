import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
    it("Carga correctamente", () => {
        const wrapper = shallowMount(HomeView);
        expect(wrapper.html()).toMatchSnapshot();
    });
})