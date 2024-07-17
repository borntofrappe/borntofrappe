SELECT
  *
FROM
  "pokemon"
  JOIN "evolution" ON "pokemon"."id" = "evolution"."evolution_id";