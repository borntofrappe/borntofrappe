export default {
  'pico-adventure': `<svg style="display: block;" viewBox="-2.5 -2.5 15 9">
  <rect fill="black" x="-2.5" y="-2.5" width="15" height="9" />
  <path stroke="white" d="M 0 0 4 0 M 0 1 4 1 M 0 2 4 2 M 0 3 4 3 M 8 0 10 0 M 5 1 6 1 M 7 1 10 1 M 6 2 9 2 M 5 3 6 3 M 7 3 8 3 M 5 4 7 4 M 8 4 9 4">
    <set begin="picoAdventurePickup.begin" attributeName="d" to="M 0 0 4 0 M 0 1 4 1 M 0 2 4 2 M 0 3 4 3 M 7 0 9 0 M 4 1 5 1 M 6 1 9 1 M 5 2 8 2 M 4 3 5 3 M 6 3 7 3 M 4 4 6 4 M 7 4 8 4" />
    <set id="picoAdventureDrop" begin="picoAdventurePickup.begin + 2s"  attributeName="d" to="M 0 0 4 0 M 0 1 4 1 M 0 2 4 2 M 0 3 4 3 M 8 0 10 0 M 5 1 6 1 M 7 1 10 1 M 6 2 9 2 M 5 3 6 3 M 7 3 8 3 M 5 4 7 4 M 8 4 9 4" />
  </path>
  <rect y="-0.5" width="4" height="4" opacity="0">
    <set id="picoAdventurePickup" begin="click" />
    <set attributeName="cursor" to="pointer" />
    <set begin="picoAdventurePickup.begin" attributeName="display" to="none" />
    <set begin="picoAdventureDrop.begin" attributeName="display" to="initial" />
  </rect>
</svg>`
}