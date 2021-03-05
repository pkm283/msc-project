import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import landing from "@/components/landing.vue";

describe("landing.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(landing, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
