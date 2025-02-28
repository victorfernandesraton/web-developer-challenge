import styled from 'styled-components'

type Props = {
	onClick: () => void
}

function DeleteButton({ onClick }: Props) {
	return (
		<Container>

			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
				onClick={onClick}
			>
				<defs>
				</defs>
				<g id="delete" transform="translate(-906.5 -462.5)">
					<g id="cancel" transform="translate(907.75 463.75)">
						<PathColor id="Caminho_10" d="M14.575 13.992L8.658 8.075a.412.412 0 0 0-.583.583l5.917 5.917a.412.412 0 1 0 .583-.583zm-.583-5.917l-5.917 5.917a.412.412 0 0 0 .583.583l5.917-5.917a.412.412 0 0 0-.583-.583z" data-name="Caminho 10" transform="translate(-2.492 -2.658)" />
						<PathColor id="Caminho_11" d="M4.317 16.183l.333-.333a7.826 7.826 0 0 1-2.333-5.583A7.689 7.689 0 0 1 4.65 4.683a7.689 7.689 0 0 1 5.583-2.333 7.689 7.689 0 0 1 5.583 2.333 7.826 7.826 0 0 1 2.333 5.583 7.689 7.689 0 0 1-2.333 5.583 7.826 7.826 0 0 1-5.583 2.333A7.689 7.689 0 0 1 4.65 15.85l-.333.333-.333.333A8.783 8.783 0 0 0 10.15 19.1a8.443 8.443 0 0 0 6.167-2.583A8.783 8.783 0 0 0 18.9 10.35a8.443 8.443 0 0 0-2.583-6.167A8.783 8.783 0 0 0 10.15 1.6a8.443 8.443 0 0 0-6.167 2.583A8.783 8.783 0 0 0 1.4 10.35a8.443 8.443 0 0 0 2.583 6.167z" data-name="Caminho 11" transform="translate(-1.4 -1.6)" />
					</g>
					<InvisiblePath id="Retângulo_5" d="M0 0h20v20H0z" data-name="Retângulo 5" transform="translate(906.5 462.5)" />
				</g>
			</svg>
		</Container>
	)
}

const Container = styled.div`
	width: 20px;
	height: 20px;
`
const PathColor = styled.path`
	fill:#d65923;
`
const InvisiblePath = styled.path`
	fill: none;
`

export default DeleteButton
