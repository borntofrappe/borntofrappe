---
title: Kit specificites
entry: 4
---

The log routes — three in total — provide an excellent excuse to experiment with some of the kit's options:

- every route is prerendered, given the static nature of the content

- the routes listing all entries and showing the content of individual entries are not hydrated on the client side

- the anchor link elements pointing toward the routes prefetch the information with `sveltekit:prefetch`

The last point raised an interesting question: it is pointless to prefetch a prerendered page? I tested the feature with a smaller demo and it is seems that prefetching still works to save a few milliseconds of loading time. It took me a lot to find this out, and that's because I found out the prefetching feature has been broken ever since version 199. What a bummer.
