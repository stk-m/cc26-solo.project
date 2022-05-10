DATABASE solo_pj

TABLE "vocab_list"
        table.increments("id").primary();
        table.string("eng", 32).notNullable();
        table.string("jpn", 32).notNullable();
