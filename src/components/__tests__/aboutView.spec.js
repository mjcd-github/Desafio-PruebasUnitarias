import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import About from "@/views/AboutView.vue";

describe("AboutView", () => {
    it("Carga correctamente", () => {
        const wrapper = shallowMount(About);
        expect(wrapper.html()).toMatchSnapshot();
    });
});