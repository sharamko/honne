'use client';
import { create } from 'zustand';

type CartState = {
  qty: Record<number, number>;
  inc: (id: number) => void;
  dec: (id: number) => void;
  setQty: (id: number, value: number) => void;
  reset: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  qty: {},
  inc: (id) => set((s) => ({ qty: { ...s.qty, [id]: (s.qty[id] ?? 0) + 1 } })),
  dec: (id) =>
    set((s) => ({
      qty: { ...s.qty, [id]: Math.max(0, (s.qty[id] ?? 0) - 1) },
    })),
  setQty: (id, value) =>
    set((s) => ({ qty: { ...s.qty, [id]: Math.max(0, value) } })),
  reset: () => set({ qty: {} }),
}));

export const selectQtyById = (id: number) => (s: CartState) => s.qty[id] ?? 0;
export const selectTotalCount = (s: CartState) =>
  Object.values(s.qty).reduce((a, b) => a + b, 0);
