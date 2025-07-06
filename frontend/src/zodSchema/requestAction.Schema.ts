
import { z } from 'zod';

export const RequestActionEnum = z.enum([
  'INVITATION_SENT',
  'INVITATION_REVOKED',
  'INVITATION_EXPIRED',
  'INVITATION_REJECTED',
  'INVITATION_ACCEPTED',
  'ROLE_ASIGNED',
  'ROLE_REMOVED',
  'TEAM_CREATED',
  'TEAM_DELETED',
  'MEMBER_REMOVED',
  'LEAVED_TEAM',
  'JOINING_REQUEST_SENT',
  'JOINING_REQUEST_RECEIVED',
  'JOINING_REQUEST_REVOKED',
  'JOINING_REQUEST_REJECTED',
  'JOINING_REQUEST_ACCEPTED',
])

export type RequestActionEnumType = z.infer<typeof RequestActionEnum>;

export const ActionLabels: Record<RequestActionEnumType, string> = {
  INVITATION_SENT: 'Invitation Sent',
  INVITATION_REVOKED: 'Invitation Revoked',
  INVITATION_EXPIRED: 'Invitation Expired',
  INVITATION_REJECTED: 'Invitation Rejected',
  INVITATION_ACCEPTED: 'Invitation Accepted',
  ROLE_ASIGNED: 'Role Asigned',
  ROLE_REMOVED: 'Role Removed',
  TEAM_CREATED: 'Team Created',
  TEAM_DELETED: 'Team Deleted',
  MEMBER_REMOVED: 'Member Removed',
  LEAVED_TEAM: 'Leaved Team',
  JOINING_REQUEST_SENT: 'Joining Request Sent',
  JOINING_REQUEST_RECEIVED: 'Joining Request Received',
  JOINING_REQUEST_REVOKED: 'Joining Request Revoked',
  JOINING_REQUEST_REJECTED: 'Joining Request Rejected',
  JOINING_REQUEST_ACCEPTED: 'Joining Request Accepted',
}