/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("vocab_list").del()
  await knex("vocab_list").insert([
    {eng: "implement", jpn: "実装する"},
    {eng: "parentheses", jpn: "丸カッコ"},
    {eng: "integers", jpn: "整数"},
    {eng: "manipulate", jpn: "操作する"},
    {eng: "pseudo_code", jpn: "疑似コード"},
    {eng: "execute", jpn: "実行する"},
    {eng: "denote", jpn: "を示す"},
    {eng: "evoke", jpn: "呼び起こす"},
    {eng: "decimal", jpn: "10進数"},
    {eng: "precise", jpn: "正確"},
    {eng: "compile" , jpn: "編集する"},
    {eng: "refer_to" , jpn: "参照する"},
    {eng: "cryptography", jpn: "暗号化"},
    {eng: "configure", jpn: "構成・設定"},
    {eng: "invoke", jpn: "呼び出す"},
    {eng: "representation", jpn: "表現"},
    {eng: "abstraction", jpn: "抽象化"},
    {eng: "explicit", jpn: "明示的"},
    {eng: "volatile", jpn: "変わりやすい・揮発性"},
    {eng: "prompt", jpn: "促す"},
    {eng: "iterate", jpn: "繰り返す"},
    {eng: "linear", jpn: "線形"},
    {eng: "concretely", jpn: "具体的に"},
    {eng: "jargon", jpn: "専門用語"},
    {eng: "hexadecimal", jpn: "16進数"},
    {eng: "duplicate", jpn: "複製"},
    {eng: "underneath", jpn: "下に"},
    {eng: "presumption", jpn: "推定"},
    {eng: "allocate", jpn: "割り当てる"},
    {eng: "canonicalize", jpn: "正規化する"},
    {eng: "retrieve", jpn: "取得"},
    {eng: "accumulate", jpn: "蓄積する"}
  ]);
};
