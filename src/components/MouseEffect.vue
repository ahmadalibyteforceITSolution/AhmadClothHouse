<template>
  <div class="mouse-effect-container">
    <div ref="cursor" class="custom-cursor"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const cursor = ref(null);
let xSetter, ySetter;

const createBubble = (x, y) => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble-particle';
  document.querySelector('.mouse-effect-container').appendChild(bubble);

  const size = Math.random() * 15 + 8;
  const initialX = x - size / 2;
  const initialY = y - size / 2;

  gsap.set(bubble, {
    x: initialX,
    y: initialY,
    width: size,
    height: size,
    opacity: 0.6,
    scale: 0.2
  });

  const tl = gsap.timeline({
    onComplete: () => {
      bubble.remove();
    }
  });

  tl.to(bubble, {
    y: initialY - (Math.random() * 100 + 50),
    x: initialX + (Math.random() - 0.5) * 100,
    opacity: 0,
    scale: 1.5,
    duration: 1.2 + Math.random() * 0.8,
    ease: "power2.out"
  });
};

const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  
  if (xSetter && ySetter) {
    xSetter(clientX);
    ySetter(clientY);
  }

  // Create bubbles based on probability
  if (Math.random() > 0.85) {
    createBubble(clientX, clientY);
  }
};

onMounted(() => {
  // Use quickSetter for better performance on main cursor
  xSetter = gsap.quickSetter(cursor.value, "x", "px");
  ySetter = gsap.quickSetter(cursor.value, "y", "px");

  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
.mouse-effect-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999999; /* Ensure it's on top of everything */
  overflow: hidden;
}

.custom-cursor {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #B8860B;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px rgba(184, 134, 11, 0.6), 0 0 5px rgba(255, 255, 255, 0.8);
  will-change: transform;
}

:deep(.bubble-particle) {
  position: absolute;
  border-radius: 50%;
  background-color: #B8860B;
  box-shadow: 0 0 10px rgba(184, 134, 11, 0.4);
}
</style>
