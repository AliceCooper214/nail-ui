import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import './button.scss'

export default defineComponent({
  name: 'NButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 'n-btn--block' : ''
    return () => {
      return (
        <button
          class={`n-btn ${blockClass} n-btn--${type.value} n-btn--${size.value}`}
          disabled={disabled.value}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
