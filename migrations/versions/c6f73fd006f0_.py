"""empty message

Revision ID: c6f73fd006f0
Revises: 536a9323b185
Create Date: 2022-10-05 18:05:40.011754

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'c6f73fd006f0'
down_revision = '536a9323b185'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('competitor', 'rol',
               existing_type=postgresql.ENUM('administration', 'competitor', name='rol'),
               type_=sa.Enum('competitor', 'administration', name='name'),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('competitor', 'rol',
               existing_type=sa.Enum('competitor', 'administration', name='name'),
               type_=postgresql.ENUM('administration', 'competitor', name='rol'),
               existing_nullable=False)
    # ### end Alembic commands ###
