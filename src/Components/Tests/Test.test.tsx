import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import Input from "../Atoms/Input"
import Span from "../Atoms/Span"
import Paragraph from "../Atoms/Paragraph"

test("O span está renderizando corretamente", () => {
    render(<Span>asd</Span>);

    const span = screen.getByTestId("test-span");

    expect(span).toBeInTheDocument();
})

test("O input está sendo renderizado corretamente", () => {
    render(<Input type="text"></Input>);

    const input = screen.getByTestId("test-input");

    expect(input).toBeInTheDocument()
})

test("o paragrafo está renderizando corretamente", () => {
    render(<Paragraph>asdad</Paragraph>)

    const paragraph = screen.getByTestId("test-p")

    expect(paragraph).toBeInTheDocument()
})