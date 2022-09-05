import { Color } from "../../enums/Color";
import King from "../King";

test('Constructor Black King', () => {
    let king = new King(Color.BLACK);
    expect(king.canCastle).toBe(true);
    expect(king.color).toBe(Color.BLACK);
    expect(king.getInitials()).toBe("bK");
});

test('Constructor White King', () => {
    let king = new King(Color.WHITE);
    expect(king.canCastle).toBe(true);
    expect(king.color).toBe(Color.WHITE);
    expect(king.getInitials()).toBe("wK");
});