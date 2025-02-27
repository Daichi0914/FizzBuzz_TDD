test('入力値が数値でない場合、エラーメッセージを返す', () => {
  // Given 必要な前提条件を用意
  const invalidInput = "文字列";
  const errorMessage = "0以上100以下の整数を入力してください";

  // When
  const output = FizzBuzz(invalidInput);

  // Then
  expect(output).toBe(errorMessage);
});
