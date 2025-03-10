import { add } from "@/index";
import { expect, test } from 'vitest'

test('while test', () => {
    expect(add(1, 2)).toBe(3)
})

