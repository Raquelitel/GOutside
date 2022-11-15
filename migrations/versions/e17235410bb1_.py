"""empty message

Revision ID: e17235410bb1
Revises: 577b222fa9f0
Create Date: 2022-11-14 12:01:07.081368

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e17235410bb1'
down_revision = '577b222fa9f0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('competition', 'competition_name',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=12),
               existing_nullable=False)
    op.alter_column('user', 'rol',
               existing_type=sa.String(),
               type_=sa.Enum('competitor', 'administration', name='name'),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'rol',
               existing_type=sa.Enum('competitor', 'administration', name='name'),
               type_=sa.String(),
               existing_nullable=False)
    op.alter_column('competition', 'competition_name',
               existing_type=sa.String(length=12),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    # ### end Alembic commands ###